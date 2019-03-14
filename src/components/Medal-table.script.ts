import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
// @ts-ignore
import Header from './header.component/Header.vue';
// @ts-ignore
import Row from './row.component/Row.vue';
import {Country, ColumLabel, Order} from '../data/Entities';

@Component({
   components: {
      Header,
      Row,
   },
})
export default class MedalTable extends Vue {
   // TODO put this into json or an other data source
   countries: Country[] = [new Country( 'Germany', 'DE', 14, 10, 7),
   new Country( 'Norway', 'no', 14, 14, 11),
   new Country( 'Canada', 'Ca', 11, 8, 10)];

   readonly columnLabel: ColumLabel[] = [new ColumLabel('Country', 'name'),
   new ColumLabel('Total', 'totalNumberOfMedals'),
   new ColumLabel('Gold', 'goldMedals'),
   new ColumLabel('Silver', 'silverMedals'), new ColumLabel('Bronze', 'bronzeMedals')];

   @Prop() private title!: string;

   beforeMount() {
      this.sortDESCBy('totalNumberOfMedals');
   }

   mounted() {
      this.$on('ordering', (column: ColumLabel) => {
         switch (column.order) {
            case Order.DESC:
               this.sortDESCBy(column.id);
               break;
            case Order.ASC:
               this.sortASCBy(column.id);
               break;
            default:
               console.error('Missing Ordering Enumeration');
               break;
         }
      });

      this.$on('deleteRow', (country: Country) => {
         this.deleteRow(country);
      });

      //this.$on('editRow', (country: Country) =>{this.})
   }

   addCountry() {
      alert('Adding Country has to de done');
   }

   private sortDESCBy(typeField: string) {
      this.countries.sort((obj1, obj2) => {
          if ( obj1[typeField] < obj2[typeField]) {
            return 1;
          } else if ( obj1[typeField] > obj2[typeField]) {
            return -1;
          } else {
            return 0;
         }
      });
  }

  private sortASCBy(typeField: string) {
   this.countries.sort((obj1, obj2) => {
         if ( obj1[typeField] > obj2[typeField]) {
            return 1;
         }

         if ( obj1[typeField] < obj2[typeField]) {
            return -1;
         }
         return 0;
      });
   }

   private deleteRow(country: Country) {
      this.countries = this.countries.filter((obj: Country) => obj !== country);
   }
}
