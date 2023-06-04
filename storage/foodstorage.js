class Foodstorage {
  constructor(storageName) {
    this.storageName = storageName;
  }
  //public
  // Add
  add(meal) {
    this._addToLocalStorage(this.storageName, meal);
  }

  // remove
  remove(id) {
    this._removeFromLocalStorage(this.storageName, 'id', id);
  }

  // get
  getAll(type) {
    // Get Data from storage or initialize collection
    const storage = this._getFromLocalStorage(this.storageName);
    // Return All food
    if (type) {
      return storage.filter(f => f['type'] === type);
    } else {
      return storage;
    }
  }

  get(criteria, value) {
    // Get Data from storage or initialize collection
    const storage = this._getFromLocalStorage(this.storageName);
    // return one food
    return storage.find(f=> f[criteria] === value) || null;
  }

  // private
  _getFromLocalStorage(storageName) {
    return localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(storageName)) : [];
  }

  _addToLocalStorage(storageName, item) {
    // Get Data from storage or initialize collection
    const storage = this._getFromLocalStorage(storageName);
    // Push new item to collection
    storage.push(item);
    // Update localstorage with new data
    localStorage.setItem(storageName, JSON.stringify(storage));
  }

  _removeFromLocalStorage(storageName, criteria, value) {
    // Get Data from storage or initialize collection
    const storage = this._getFromLocalStorage(storageName);
    // Remove item by criteria
    const newFood = storage.filter(f => f[criteria] !== value);
    // // Update localstorage with new data
    localStorage.setItem(storageName, JSON.stringify(newFood));
  }
}