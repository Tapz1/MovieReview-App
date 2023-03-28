import {Form,Button, FormControl} from 'react-bootstrap';

const ReviewForm = () => {
  return (
    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>{labelText}</Form.Label>
            <FormControl ref={revText} as="textarea" rows={3} defaultValue={defaultValue}></FormControl>
        </Form.Group>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm