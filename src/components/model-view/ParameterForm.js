import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { connect } from 'react-redux';
import { updateParameter } from 'redux/actions/ModelActions';
import SelectionParameter from 'price-model/common/parameter/SelectionParameter';
import NumericParameter from 'price-model/common/parameter/NumericParameter';
import NumericArrayParameter from 'price-model/common/parameter/NumericArrayParameter';

const ParameterForm = props => {

  const parameter = props.parameter;

  const getValue = parameter.value === null ? '' : parameter.value;

  const handleSelectionChange = event => {
    const newValue = event.target.value;
    props.updateParameter(parameter.name, newValue)
  };

  const handleNumericChange = event => {
    const newValue = event.target.value === '' ? null : Number(event.target.value);
    props.updateParameter(parameter.name, newValue);
  };

  const handleNumericArrayChange = event => {
    const newValue = event.target.value === '' ? [] : event.target.value.split(',').map(number => parseFloat(number));
    props.updateParameter(parameter.name, newValue);
  };

  const buildInputCell = parameter => {
    switch (parameter.constructor) {
      case SelectionParameter:
        return (
          <FormControl style={{ width: '40vw' }} defaultValue={getValue} as='select' placeholder={parameter.description} onChange={handleSelectionChange}>
            {parameter.selections.map(selection => <option key={selection}>{selection}</option>)}
          </FormControl>
        );

      case NumericParameter:
        return (
          <FormControl style={{ width: '40vw' }} defaultValue={getValue} placeholder={parameter.description} onChange={handleNumericChange} />
        );

      case NumericArrayParameter:
        return (
          <FormControl style={{ width: '40vw' }} defaultValue={getValue} placeholder={parameter.description} onChange={handleNumericArrayChange} />
        );

      default:
        return;
    }
  };

  const inputGroup = (
    <InputGroup style={{ justifyContent: 'center' }}>
      <InputGroup.Prepend>
        <InputGroup.Text>{parameter.name}</InputGroup.Text>
        {buildInputCell(parameter)}
      </InputGroup.Prepend>
    </InputGroup>
  );

  const inputGroupWithTooltip = (
    <OverlayTrigger placement='right' overlay={<Tooltip>{parameter.tooltip}</Tooltip>} >
      {inputGroup}
    </OverlayTrigger>
  );

  return parameter.tooltip !== undefined ? inputGroupWithTooltip : inputGroup;
};

const mapDipatchToProps = dispatch => ({
  updateParameter: (parameterName, newValue) => dispatch(updateParameter(parameterName, newValue))
});

export default connect(null, mapDipatchToProps)(ParameterForm);