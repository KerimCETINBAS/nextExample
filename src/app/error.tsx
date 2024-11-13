"use client"
import Link from "next/link";

export default function Unauthorized() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>401 - Unauthorized</h1>
        <p>You do not have permission to view this page.</p>
        <p>Please make sure you're logged in with the correct permissions.</p>
        <Link style={{ color: 'blue', textDecoration: 'underline' }} href="/">
                Go to Login Page
        </Link>
      </div>
    );
  }