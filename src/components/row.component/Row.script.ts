import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import {Country} from '../../data/Entities';

@Component
export default class Row extends Vue {

    @Prop() private countries!: Country[];

    getFlagIcon(country: Country) {
        return 'flag flag-' + country.code.toLocaleLowerCase();
    }

    modify(country: Country) {
        // TODO fix show case of modifiy to modal (Edit-Row component)
        country.goldMedals = 0;
        this.$parent.$emit('editRow', country);
    }

    deleteContry(country: Country) {
        this.$parent.$emit('deleteRow', country);
    }
}
