const deleteProduct = (btn) => {
  const prodId = btn.parentElement.querySelector(
    'input[name="productId"]'
  ).value;
  const csrf = btn.parentElement.querySelector('input[name="_csrf"]').value;

  const productElement = btn.closest("article");

  fetch(`/admin/products/${prodId}`, {
    method: "DELETE",
    headers: {
      "CSRF-Token": csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.parentNode.removeChild(productElement);
    })
    .catch((err) => {
      console.log(err);
    });
};
