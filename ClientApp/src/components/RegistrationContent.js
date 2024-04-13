import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Input, Button, FormGroup, Label } from 'reactstrap';
import classnames from 'classnames';

const RegistrationContent = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleRetypePasswordChange = (e) => {
        setRetypePassword(e.target.value);
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSignIn = () => {
        // Implement your sign-in logic here
    }

    const handleSignUp = () => {
        // Implement your sign-up logic here
    }

    const handleClear = () => {
        setEmail('');
        setPassword('');
        setName('');
        setRetypePassword('');
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'login' })}
                        onClick={() => { toggle('login'); }}
                    >
                        <p className="h4 text-dark">Login</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'register' })}
                        onClick={() => { toggle('register'); }}
                    >
                        <p className="h4 text-dark">Register</p>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="login">
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder="someone@example.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type={showPassword ? "text" : "password"} name="password" id="password" value={password} onChange={handlePasswordChange} placeholder = "********" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="forget-password"><a href="" placeholder="********">Forget Password ?</a></Label>
                    </FormGroup>
                    <Button color="secondary" onClick={handleClear}>Clear</Button>{' '}
                    <Button color="warning" onClick={handleSignIn}>Sign In</Button>{' '}
                </TabPane>
                <TabPane tabId="register">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={name} onChange={handleNameChange} placeholder = "John Doe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder = "someone@example.com" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type={showPassword ? "text" : "password"} name="password" id="password" value={password} onChange={handlePasswordChange} placeholder = "********" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="retypePassword">Re-Type Password</Label>
                        <Input type={showPassword ? "text" : "password"} name="retypePassword" id="retypePassword" value={retypePassword} onChange={handleRetypePasswordChange} placeholder = "********" />
                    </FormGroup>
                    <Button color="secondary" onClick={handleClear}>Clear</Button>{' '}
                    <Button color="warning" onClick={handleSignUp}>Sign Up</Button>{' '}
                </TabPane>
            </TabContent>
        </div>
    );
}

export default RegistrationContent;
