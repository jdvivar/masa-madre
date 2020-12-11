import { isTagName } from './isTagName.js'

export const getChildrenWithTag = function (tag) {
  return [...this.children].filter(isTagName(tag))
}
