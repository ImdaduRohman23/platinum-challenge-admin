import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLogin() {
    return (
        <Form>
            <h2>Welcome, Admin BCR</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="6+ karakter" />
            </Form.Group>
            <Button style={{width: '100%'}} variant="primary" type="submit">
                Sign In
            </Button>
        </Form>
    );
}

export default FormLogin;