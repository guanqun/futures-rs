initSidebarItems({"enum":[["Either","A `Future` which is `Either` future `A` or future `B`."],["Loop","An enum describing whether to `break` or `continue` a `loop_fn` loop."]],"fn":[["empty","Creates a future which never resolves, representing a computation that never finishes."],["err","Creates a new future that will immediately fail with the given error."],["join_all","Creates a future which represents a collection of the results of the futures given."],["lazy","Creates a new future which will eventually be the same as the one created by the closure provided."],["loop_fn","Creates a new future implementing a tail-recursive loop."],["ok","Creates a new future that will immediately resolve successfully to the given value."],["poll_fn","Creates a new future wrapping around a function returning `Poll`."],["result","Creates a new future that will immediate resolve with the given result."],["select_all","Creates a new future which will select over a list of futures."],["select_ok","Creates a new future which will select the first successful future over a list of futures."]],"struct":[["AndThen","Future for the `and_then` combinator, chaining a computation onto the end of another future which completes successfully."],["CatchUnwind","Future for the `catch_unwind` combinator."],["Empty","A future which is never resolved."],["ErrInto","Future for the `err_into` combinator, changing the error type of a future."],["Flatten","Future for the `flatten` combinator."],["FlattenStream","Future for the `flatten_stream` combinator, flattening a future-of-a-stream to get just the result of the final stream as a stream."],["Fuse","A future which \"fuses\" a future once it's been resolved."],["FutureOption","A future representing a value which may or may not be present."],["FutureResult","A future representing a value that is immediately ready."],["Inspect","Do something with the item of a future, passing it on."],["IntoStream","A type which converts a `Future` into a `Stream` containing a single element."],["Join","Future for the `join` combinator, waiting for two futures to complete."],["Join3","Future for the `join3` combinator, waiting for three futures to complete."],["Join4","Future for the `join4` combinator, waiting for four futures to complete."],["Join5","Future for the `join5` combinator, waiting for five futures to complete."],["JoinAll","A future which takes a list of futures and resolves with a vector of the completed values."],["Lazy","A future which defers creation of the actual future until the future is `poll`ed."],["LoopFn","A future implementing a tail-recursive loop."],["Map","Future for the `map` combinator, changing the type of a future."],["MapErr","Future for the `map_err` combinator, changing the error type of a future."],["OrElse","Future for the `or_else` combinator, chaining a computation onto the end of a future which fails with an error."],["PollFn","A future which adapts a function returning `Poll`."],["Select","Future for the `select` combinator, waiting for one of two differently-typed futures to complete."],["SelectAll","Future for the `select_all` combinator, waiting for one of any of a list of futures to complete."],["SelectOk","Future for the `select_ok` combinator, waiting for one of any of a list of futures to successfully complete. Unlike `select_all`, this future ignores all but the last error, if there are any."],["Shared","A future that is cloneable and can be polled in multiple threads. Use `Future::shared()` method to convert any future into a `Shared` future."],["SharedError","A wrapped error of the original future that is cloneable and implements Deref for ease of use."],["SharedItem","A wrapped item of the original future that is cloneable and implements Deref for ease of use."],["Then","Future for the `then` combinator, chaining computations on the end of another future regardless of its outcome."]],"trait":[["Future","A future represents an asychronous computation that may fail."],["FutureExt","An extension trait for `Future`s that provides a variety of convenient combinator functions."],["FutureFrom","Asynchronous conversion from a type `T`."],["IntoFuture","Types that can be converted into a future."]]});