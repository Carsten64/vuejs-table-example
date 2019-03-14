import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ColumLabel, Order} from '../../data/Entities';

@Component
export default class Header extends Vue {

    @Prop() private labels!: ColumLabel[];

    changeOrdering(colum: ColumLabel) {
        colum.order === Order.DESC ? (colum.order = Order.ASC) : (colum.order = Order.DESC);
        this.$parent.$emit('ordering', colum);
    }

    changeClass(colum: ColumLabel) {
        return colum.order === Order.DESC ? 'des-odering' : 'asc-ordering';
    }
}
