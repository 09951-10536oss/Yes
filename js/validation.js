document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-product-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const price = parseFloat(document.getElementById("price").value);
            const quantity = parseInt(document.getElementById("quantity").value);

            if (!name || isNaN(price) || isNaN(quantity)) {
                alert("กรุณากรอกข้อมูลให้ถูกต้องครบถ้วน");
                return;
            }

            saveProduct({ name, price, quantity });
            alert("บันทึกสินค้าเรียบร้อยแล้ว");
            window.location.href = "products.html";
        });
    }
});
