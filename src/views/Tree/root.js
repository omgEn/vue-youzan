const root = {
  text: 'Root Folder',
  leaf: false,
  expanded: true,
  children: [
		{
			text: 'Sub Folder 1',
			leaf: false,
			expanded: false,
			children: [
			{
				text: 'Sub Sub Folder 1',
				leaf: false,
				expanded: false,
				children: [{
					text: 'SomeFile1.js',
					leaf: true
				},
			]
    }, 
		{
      text: 'Sub Sub Folder 2',
      leaf: false,
      expanded: false,
      children: []
    }, 
		{
      text: 'SomeFile.txt',
      leaf: true
    }]
  }]
}

export default root;