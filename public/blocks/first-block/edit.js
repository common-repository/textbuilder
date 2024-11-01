import attributes from './block.json';

const { __, setLocaleData } = wp.i18n;
const { useBlockProps, RichText, AlignmentControl, BlockControls } = wp.blockEditor;

export default function Edit ({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { align, content } = attributes;

  const onChangeContent = (newContent) => {
    setAttributes({ content: newContent })
  }

  const onChangeAlign = (newAlign) => {
    setAttributes({
      align: newAlign === undefined ? 'none' : newAlign,
    })
  }

  return (
    <>
      <BlockControls>
        <AlignmentControl
          value={align}
          onChange={onChangeAlign}
        />
      </BlockControls>
      <RichText
        {...blockProps}
        tagName='p'
        onChange={onChangeContent}
        allowedFormats={['core/bold', 'core/italic']}
        value={content}
        placeholder={__('Write your text...')}
        style={{
          textAlign: align
        }}
      />
    </>
  );
}