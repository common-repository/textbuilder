import Edit from './edit';
import save from './save';
import attributes from './block.json';

const { registerBlockType } = wp.blocks;
const { name, title, icon, category } = attributes;

registerBlockType( name, {
  title: title,
  icon: icon, // https://developer.wordpress.org/resource/dashicons/#heading
  category: category,

  /**
   * @see ./edit.js
   */
  edit: Edit,

  /**
   * @see ./save.js
   */
  save,
} );