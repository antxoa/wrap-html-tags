'use babel';

export function activate(){
}

function wrapSelection(tag){
	const editor = atom.workspace.getActiveTextEditor();
	if(!editor){
		return;
	}

	const selections = editor.getSelections();

	selections.forEach(function(sel){
		const text = sel.getText();
		if(text && text.length > 0){
			const openTag = '<' + tag + '>';
			const closeTag = '</' + tag + '>';
			sel.insertText(openTag + text + closeTag);
		}
	});
}

atom.commands.add(
	'atom-text-editor',
	'wrap-html-tags:wrap-with-code',
	function(){
		wrapSelection('code');
	}
);
