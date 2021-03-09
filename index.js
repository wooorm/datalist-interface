export class DatalistInterface {
  /**
   * Create a new data list.
   * Values are passed to `#add()`.
   *
   * @constructor
   * @param {Iterable} values
   */
  constructor(values) {
    this.values = []
    this.add(...values)
  }

  /**
   * Add all arguments.
   */
  add(/* values... */) {
    this.values.push(...arguments)
    return this
  }

  /**
   * Remove all arguments.
   */
  remove(/* values... */) {
    var index = arguments.length
    var position

    while (index--) {
      position = this.values.indexOf(arguments[index])

      if (position !== -1) {
        this.values.splice(position, 1)
      }
    }

    return this
  }

  /**
   * Check whether `value` is in this list.
   */
  is(value) {
    return this.values.indexOf(value) !== -1
  }

  /**
   * Check whether `value` is in this list.
   */
  has(value) {
    return this.is(value)
  }

  /**
   * Get all values.
   */
  all() {
    return this.values.concat()
  }

  /**
   * Get all values.
   */
  valueOf() {
    return this.all()
  }

  /**
   * Get all values.
   */
  toJSON() {
    return this.all()
  }

  /**
   * Serialize all values.
   */
  toString() {
    return this.values.toString()
  }
}
