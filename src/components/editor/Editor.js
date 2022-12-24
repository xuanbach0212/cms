import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const Editor = ({setValue}) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	// const config = 
	// 	{
    //         disablePlugins: 'add-new-line',
	// 	};
		

	return (
		<JoditEditor
			ref={editor}
			value={content}
            intialValue = {`<div></div>`}
			// config={config}
			// tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={(data) => setValue(data)}
		/>
	);
};

export default Editor;