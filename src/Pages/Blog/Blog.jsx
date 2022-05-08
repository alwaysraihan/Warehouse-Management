import React from "react";

const Blogs = () => {
  return (
    <div className="py-16 px-5 md:px-[20%]">
      {/* Question-1 */}
      <h1 className="text-4xl mb-3">
        Difference between javascript and nodejs?
      </h1>
      <p className="text-xl">
        Javascript is a scripting language that runs in any browser JavaScript
        Engine.Whereas Node JS is an interpreter or runtime environment for a
        JavaScript programming language. Node js can run the javascript code on
        the server side. Node js runs on the V8 engine and executes JavaScript
        code outside a web browser.
      </p>
      {/* Question-2  */}
      <h1 className="text-4xl mt-5 mb-3">
        Differences between sql and nosql databases ?
      </h1>
      <p className="text-xl">
        The main difference between sql and nosql database is tahat, SQl is a
        relational database and nosql is a nor-relational database. SQL
        databases are table-based, while NoSQL databases are document based, SQL
        databases are better for multi-row data, while NoSQL is better for
        unstructured data like JSON.
      </p>
      {/* Question-3  */}
      <h1 className="text-4xl mt-5 mb-3">
        What is the purpose of jwt and how does it work ?
      </h1>
      <p className="text-xl">
        Basically Json Web Token(jwt) used for security purpose between two
        parties — a client and a server. JSON Web Token (JWT) is an open
        standard that defines a compact and self-contained way for securely
        transmitting information between parties as a JSON object. If we use JWT
        then our api data will be accesable for varified user . Without verify
        user can not able to acces data form api or sever side.
      </p>
    </div>
  );
};

export default Blogs;
