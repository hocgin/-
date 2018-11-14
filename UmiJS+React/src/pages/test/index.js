import style from './index.css';
import Link from "umi/link";
import Redirect from "umi/redirect";
export default function () {
    return (
        <div>测试文本
            <Link to={`/`}>回去</Link>
            {/*<Redirect to={`/`}/>*/}
        </div>
    );
}
