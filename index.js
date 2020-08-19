
 // Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
    }
  };

// Crear elementos con atributos e hijo
const createCustomElement = (element,attributes,children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement,attributes);
    return customElement;
  };

// Crear e imprimir modal
const edModal = content => {
    const modalContentEl = createCustomElement('div', {
        id: "ed-modal-content",
        class: "ed-modal-content"
      }, [content]),
      modalContainerEl = createCustomElement('div', {
        id: "ed-modal-container",
        class: "ed-modal-container"
      }, [modalContentEl]);

      document.body.appendChild(modalContainerEl)

  // Remover modal
  const removeModal = () => document.body.removeChild(modalContainerEl);

  // cerrar modal con click
  modalContainerEl.addEventListener('click', e => {
    if (e.target === modalContainerEl) removeModal();
  });

  // cerrar modal con escape
  const offCloseModalEsc = () => removeEventListener('keyup', closeModalEsc);
  const closeModalEsc = e => {
    if (e.key === "Escape") {
      removeModal();
      offCloseModalEsc();
    }
  };
  addEventListener('keyup', closeModalEsc);
};

var login = document.getElementById('ventana-modal')
document.getElementById('show-modal').addEventListener('click', () =>{
    edModal(login)
})