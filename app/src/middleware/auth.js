import axios from "axios";
import { API_URL } from "../config";

export default function auth({ next, router }) {
    if(!localStorage.getItem('token')) {
        return router.push({ name: 'Login' });
    } else {
        axios({
            method: "post",
            url: API_URL+"/admin/auth/check",
            headers: {
              Authorization: localStorage.getItem('token')
            }
        }).then(() => {
            return next();
        }).catch(() => {
            localStorage.removeItem('token');
            return router.push({ name: 'Login' })
        });
    }
}