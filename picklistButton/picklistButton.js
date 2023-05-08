import { LightningElement } from 'lwc';

export default class PicklistButton extends LightningElement {

    value = 'inProgress';

    get options() {
        return [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High Priority', value: 'High Priority' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

}