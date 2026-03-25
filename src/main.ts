import {App, Editor, MarkdownView, Modal, Notice, Plugin, requestUrl} from 'obsidian';


// Remember to rename these classes and interfaces!

export default class BitcoinPlugin extends Plugin {


	async onload() {
		
			const res = await requestUrl({
				url: 'https://blockchain.info/ticker'
			})
			const btc_price_extract = res.json.USD.buy;
			const btc_price_modifed = "$" + btc_price_extract.toFixed(2).slice(0, 7);
			this.addRibbonIcon('bitcoin', 'Bitcoin Price', () => {
				new Notice(`${btc_price_modifed}`);
			}
			)};

	onunload() {
	}


	

	onClose() {
	
	}
}
