export class Context {
	eatWith:string;
	place:string
	meal:string;
	modality:string;
	situation:string;

	public getData():object {
		const result = {};
		Object.keys(this).map(key => result[key] = this[key]);
		return result;
	}
}
