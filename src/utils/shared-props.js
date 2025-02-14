import PropTypes from 'prop-types'

const EmojiPropTypes = {
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  fallback: PropTypes.func,
  spriteSheetFn: PropTypes.func,
  emojiImageFn: PropTypes.func,
  native: PropTypes.bool,
  forceSize: PropTypes.bool,
  tooltip: PropTypes.bool,
  skin: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  sheetSize: PropTypes.oneOf([16, 20, 32, 64]),
  sheetColumns: PropTypes.number,
  sheetRows: PropTypes.number,
  set: PropTypes.oneOf(['apple', 'google', 'twitter', 'facebook']),
  size: PropTypes.number.isRequired,
  emoji: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  useLocalImages: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  margin: PropTypes.number,
  noMargin: PropTypes.bool,
}

const PickerPropTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onSelect: PropTypes.func,
  onPressClose: PropTypes.func,
  onSkinChange: PropTypes.func,
  perLine: PropTypes.number,
  rows: PropTypes.number,
  pagesToEagerLoad: PropTypes.number,
  viewWidth: PropTypes.string,
  emojiSize: PropTypes.number,
  emojiMargin: PropTypes.number,
  anchorSize: PropTypes.number,
  i18n: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  emoji: PropTypes.string,
  color: PropTypes.string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  native: PropTypes.bool,
  spriteSheetFn: EmojiPropTypes.spriteSheetFn,
  sheetSize: EmojiPropTypes.sheetSize,
  emojiImageFn: EmojiPropTypes.emojiImageFn,
  emojisToShowFilter: PropTypes.func,
  useLocalImages: EmojiPropTypes.useLocalImages,
  showSkinTones: PropTypes.bool,
  showAnchors: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  theme: PropTypes.oneOf(['auto', 'light', 'dark']),
  include: PropTypes.arrayOf(PropTypes.string),
  exclude: PropTypes.arrayOf(PropTypes.string),
  recent: PropTypes.arrayOf(PropTypes.string),
  autoFocus: PropTypes.bool,
  enableFrequentEmojiSort: PropTypes.bool,
  custom: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      short_names: PropTypes.arrayOf(PropTypes.string).isRequired,
      emoticons: PropTypes.arrayOf(PropTypes.string),
      keywords: PropTypes.arrayOf(PropTypes.string),
      image: PropTypes.oneOfType([
        PropTypes.shape({
          uri: PropTypes.string,
        }),
        PropTypes.number,
      ]),
      spriteSheet: PropTypes.string,
      sheet_x: PropTypes.number,
      sheet_y: PropTypes.number,
      size: PropTypes.number,
      sheetColumns: PropTypes.number,
      sheetRows: PropTypes.number,
    }),
  ),
  skinEmoji: PropTypes.string,
  notFound: PropTypes.func,
  notFoundEmoji: PropTypes.string,
  categoryEmojis: PropTypes.objectOf(PropTypes.string),
}

export {EmojiPropTypes, PickerPropTypes}
