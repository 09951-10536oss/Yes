document.addEventListener("DOMContentLoaded", () => {
    // อัปเดตข้อมูลหน้า Dashboard
    const totalProductsEl = document.getElementById("total-products");
    const totalValueEl = document.getElementById("total-value");

    if (totalProductsEl && totalValueEl) {
        const products = getProducts();
        totalProductsEl.textContent = products.length;
        
        const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
        totalValueEl.textContent = `฿${totalValue.toLocaleString()}`;
    }

    // อัปเดตหน้าตารางสินค้า
    const productListEl = document.getElementById("product-list");
    if (productListEl) {
        renderProductTable(productListEl);
    }
});

function renderProductTable(container) {
    const products = getProducts();
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = `<tr><td colspan="4" style="text-align:center;">ไม่มีข้อมูลสินค้า</td></tr>`;
        return;
    }

    products.forEach((product, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${product.name}</td>
            <td>฿${Number(product.price).toLocaleString()}</td>
            <td>${product.quantity}</td>
            <td><button class="btn btn-danger" onclick="removeProduct(${index})">ลบ</button></td>
        `;
        container.appendChild(tr);
    });
                  }
