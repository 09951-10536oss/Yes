const STORAGE_KEY = "app_inventory_data";

// ดึงข้อมูลสินค้าทั้งหมด
function getProducts() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// บันทึกสินค้าใหม่
function saveProduct(product) {
    const products = getProducts();
    products.push(product);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

// ลบสินค้า
function removeProduct(index) {
    const products = getProducts();
    products.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    location.reload();
}
