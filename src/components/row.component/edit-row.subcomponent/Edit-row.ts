import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Country } from '@/data/Entities';
// TODO create modal was handling editing 
@Component
export default class EditRow extends Vue {

    @Prop() private country!: Country;
}
