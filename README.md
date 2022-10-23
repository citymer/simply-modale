![Alt text](src/lib/assets/modal-image.PNG)

# simply-modale is a library of React components created using `create-react-app`.

## Installation

`npm install simply-modale`

## How to use

Simply import the Modal component into the file you want to use the modal 

`import { Modal } from simply-modale`

The modal functionality is handled by the local state of the modal's parent. Therefore, the parent component requires state. I have used modaleIsOpen and setModaleIsOpen as variable names, but you can call them whatever you like.

`const [modalIsOpen, setModalIsOpen] = useState(false)`

The initial state should be set to __false__.

An action at the parent component's level allows to change the state to __true__.

```
const  handleSubmit = ( => {
    setModalIsOpen(true)
}
```

The "closeModal" prop receives the close modal function as value. This enables the modal to be closed on button click .

"closeModal" is required.

```
 const  closeModal = () => {
    setModalIsOpen(false)
 }
```

The "title" prop receives the "title" variable as its value. This allows you to write the text you want to see in the modal.

"title" is required.

`const title = "the text of the modal"`

to apply the css style of your text, use the ".textModal" class.

__Example__
```
.textModal {
fontsize: 12px;
color: red;
}
```

### Example of use

```
import { Modal } from 'simply-modale'

const Example = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false)
   
   const submit = () => {
      setModalIsOpen(true)
   }
   
   const closeModal = () => {
      setModalIsOpen(false)
   }
   
   const title = " my modal text "
   
   return (
     <div>
        <form>
        ...........
        <form/>
        {modalIsOpen && <Modal closeModal={closeModal} title={title} />}
     <div>
    )
 } 
 ```
