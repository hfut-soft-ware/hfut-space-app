export default {
  pages: {
    globalStyle: {
      navigationStyle: 'custom',
      backgroundColor: '#ffffff',
    },
    easycom: {
      autoscan: true,
      custom: {
        '^sys$': '@/sys.vue',
        '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      },
    },
  },
  uniCloud: true,
}
