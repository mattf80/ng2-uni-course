import { Grape } from './../shared/grape';
export class Wine {
    constructor(
        public name: string,
        public shortDesc: string,
        public imageUrl: string,
        public grapes: Grape[] ) {}
}
