import {useState} from "react";
import '../../assets/Css/side.css';

function Layout() {
    const [inputs, setInputs] = useState({});

    const handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleData = event => {
        event.preventDefault();
        console.log(inputs);
    };

    return (
        <div className="main-form-page">
            <form className="login-form" onSubmit={handleData}>
                <label htmlFor="name">Username</label>
                <input type="text"
                       id="username"
                       name="username"
                       value={inputs.username || ''}
                       onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input type="password"
                       id="password"
                       name="password"
                       value={inputs.password || ''}
                       onChange={handleChange}
                />
                <label htmlFor="email">Email Address</label>
                <input type="email"
                       id="email"
                       name="email"
                       value={inputs.email || ''}
                       onChange={handleChange}
                />
                <label htmlFor="phone">Phone Number</label>
                <input type="phone"
                       id="phone"
                       name="phone"
                       value={inputs.phone || ''}
                       onChange={handleChange}
                />
                <input type="submit" id="submit"/>
            </form>
        </div>
    );
}

export default Layout;