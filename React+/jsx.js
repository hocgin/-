class JSX extends React.Component {

    render() {
        /**
         * key:
         * - React利用key来识别组件，它是一种身份标识标识
         * - key 在他的兄弟元素之间应该唯一
         * @type {*[]}
         */
        let spans = [
            <span key={0}>array.0</span>,
            <span key={1}>array.1</span>
        ],
        style = {
            fontSize: '2em',
            color: '#FF0000'
        };

        return (<div>
            {/** 这是一段注释, 并不会被渲染 **/}
            <div>{spans}</div>
            <div>{1 + 1}</div>
            <div style={style}>{new Date().toDateString()}</div>
            <div>{Math.random() > 0.5 ? 'true' : 'false'}</div>
            <div>{ Math.random() > 0.5 && <h1>2233 {9-1}</h1>}</div>
        </div>);
    }
}