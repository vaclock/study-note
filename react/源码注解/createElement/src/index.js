import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';

const UserProfile = React.memo(({ user }) => {
  console.log('UserProfile rendered');
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}, (prev, cur) => {
  console.log(prev, cur, Object.is(prev, cur));
  return prev.name === cur.name
  && prev.email === cur.email
  && prev.age === cur.age
});
class ClassTest extends React.Component {
  constructor(props) {
    super(props)
    console.log(this)
    window.test = this;
    this.state = { ownText: this._ownText }
  }

  _ownText = '属于我自己的属性'

  componentDidMount() {
    const {ownText} = this.state;
    setTimeout(() => {
      console.log('????')
      this.setState({
        ownText: `${ownText} has changed`
      })
    }, 3000)
  }
  render() {
    const {msg} = this.props;
    const {ownText} = this.state;
    return <>
      <div>
        类组件测试: {msg}
      </div>
      <div>
        自己的属性值: {ownText}
      </div>
    </>
  }
}

function App() {
  const [text, setText] = useState('text')
  setTimeout(() => {
    setText('text changed')
  }, 2000)
  const [msg, setMsg] = useState('from function parent to class')
  return (
    <div>
      <h1 style={{color: 'red'}} data-ref="1">{text}</h1>
      <UserProfile user={{
        name: 'lee',
        email: '111',
        age: 11
      }}></UserProfile>

      <ClassTest msg={msg}></ClassTest>
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById('app')).render(<App />);
ReactDOM.render(<App />, document.querySelector('#app'));