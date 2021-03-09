/**
 * A basic interface for a list.
 *
 * @template Item
 */
export class DatalistInterface {
  /**
   * Create a new data list.
   * Values are passed to `#add()`.
   *
   * @param {Item[]} values
   */
  constructor(values) {
    this.values = []
    this.add(...values)
  }

  /**
   * Add all arguments.
   *
   * @param {Item[]} values
   * @return {this}
   */
  add(...values) {
    this.values.push(...values)
    return this
  }

  /**
   * Remove all arguments.
   *
   * @param {Item[]} values
   * @return {this}
   */
  remove(...values) {
    var index = values.length
    var position

    while (index--) {
      position = this.values.indexOf(values[index])

      if (position !== -1) {
        this.values.splice(position, 1)
      }
    }

    return this
  }

  /**
   * Check whether `value` is in this list.
   *
   * @param {Item} value
   * @return {boolean}
   */
  is(value) {
    return this.values.indexOf(value) !== -1
  }

  /**
   * Check whether `value` is in this list.
   *
   * @param {Item} value
   * @return {boolean}
   */
  has(value) {
    return this.is(value)
  }

  /**
   * Get all values.
   *
   * @return {Item[]}
   */
  all() {
    return this.values.concat()
  }

  /**
   * Get all values.
   *
   * @return {Item[]}
   */
  valueOf() {
    return this.all()
  }

  /**
   * Get all values.
   *
   * @return {Item[]}
   */
  toJSON() {
    return this.all()
  }

  /**
   * Serialize all values.
   *
   * @return {string}
   */
  toString() {
    return this.values.toString()
  }
}
