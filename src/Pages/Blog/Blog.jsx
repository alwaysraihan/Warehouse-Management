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
        Engine.Whereas Node JS is an interpreter or running environment for a
        JavaScript programming language that holds many excesses, it requires
        libraries that can easily be accessed from JavaScript programming for
        better use.
      </p>
      {/* Question-2  */}
      <h1 className="text-4xl mt-5 mb-3">
        Differences between sql and nosql databases ?
      </h1>
      <p className="text-xl">
        The main difference between sql and nosql database is tahat, SQl is a
        relational database and nosql is a nor-relational database. SQL
        databases are table-based, while NoSQL databases are document,
        key-value, graph, or wide-column stores. SQL databases are better for
        multi-row transactions, while NoSQL is better for unstructured data like
        documents or JSON.
        <p>
          We have many alternatives way for authentication. We can use MongoDB
          and other's option for authentication.{" "}
        </p>
      </p>
      {/* Question-3  */}
      <h1 className="text-4xl mt-5 mb-3">
        What is the purpose of jwt and how does it work ?
      </h1>
      <p className="text-xl">
        JSON Web Token (JWT) is an open standard that defines a compact and
        self-contained way for securely transmitting information between parties
        as a JSON object. This information can be verified and trusted because
        it is digitally signed.
      </p>
    </div>
  );
};

export default Blogs;
