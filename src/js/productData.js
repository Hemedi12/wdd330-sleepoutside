//converts to json
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class productData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
  async getData() {
    return await fetch("../json/tents.json").then(convertToJson);
  }
}
