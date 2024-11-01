import attributes from './block.json';

const { __, setLocaleData } = wp.i18n;
const { useBlockProps, RichText } = wp.blockEditor;

export default function save ({ attributes }) {
  const blockProps = useBlockProps.save();
  const { align, content } = attributes;

  return (
    <RichText.Content
      {...blockProps}
      tagName="p"
      value={content}
      style={{ textAlign: align }}
    />
  );
}