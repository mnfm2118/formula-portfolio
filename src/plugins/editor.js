import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';

function doEditor() {
  return new EditorJS({
    holder: 'editor',
    tools: {
      header: {
        class: Header,
        config: {
          levels: [2, 3, 4],
          defaultLevel: 2,
        },
      },
      list: {
        class: List,
        inlineToolBar: true,
        config: {
          defaultStyle: 'unorderd',
        },
      },
      paragraph: {
        class: Paragraph,
        inlineToolBar: true,
        config: {
          preserveBlank: true,
        },
      },
    },
  });
}

export default doEditor;
