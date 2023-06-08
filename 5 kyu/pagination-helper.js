class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    
    this.getItemsMap()
  }
  
  getItemsMap() {
    this.map = {}
    let page = 0
    
    for (let i = this.itemsPerPage; i <= this.collection.length; i++) {
      if (i % this.itemsPerPage == 0 || i == this.collection.length) {
        this.map[page] = i % this.itemsPerPage == 0 ? this.itemsPerPage : i % this.itemsPerPage
        page++
      }
    }
  }
  
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage)
  }
  
  itemCount() {
    return this.collection.length
  }
  
  pageItemCount(page) {
    return this.map[page] || -1
  }
  
  pageIndex(i) {
    if (i < 0) return -1
    
    const pages = Object.keys(this.map)
    let count = 0
    
    for (let j = 0; j < pages.length; j++) {
      const current = pages[j]
      if (i <= this.map[current] + count) {
        return current
      }
      
      count += this.itemsPerPage
    }
    
    return -1
  }
}