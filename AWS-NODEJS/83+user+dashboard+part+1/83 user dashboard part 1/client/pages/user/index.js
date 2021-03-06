import Layout from '../../components/Layout';
import Link from 'next/link';
import axios from 'axios';
import moment from 'moment';
import { API } from '../../config';
import { getCookie } from '../../helpers/auth';
import withUser from '../withUser';

const User = ({ user, userLinks, token }) => {
    const listOfLinks = () =>
        userLinks.map((l, i) => (
            <div key={i} className="row alert alert-primary p-2">
                <div className="col-md-8">
                    <a href={l.url} target="_blank">
                        <h5 className="pt-2">{l.title}</h5>
                        <h6 className="pt-2 text-danger" style={{ fontSize: '12px' }}>
                            {l.url}
                        </h6>
                    </a>
                </div>
                <div className="col-md-4 pt-2">
                    <span className="pull-right">
                        {moment(l.createdAt).fromNow()} by {l.postedBy.name}
                    </span>
                </div>
            </div>
        ));

    return (
        <Layout>
            <h1>
                {user.name}'s dashboard <span className="text-danger">/{user.role}</span>
            </h1>
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link href="/user/link/create">
                                <a className="nav link">Submit a link</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/user/profile/update">
                                <a className="nav link">Update profile</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <h2>Your links</h2>
                    <hr />
                    {listOfLinks()}
                </div>
            </div>
        </Layout>
    );
};

export default withUser(User);
