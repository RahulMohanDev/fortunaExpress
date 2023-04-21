# fortunaExpress
code for express

## what is a thread 
In computing, a process is an instance of a program that is running on a computer, which includes the executable code, data, and system resources associated with the program. A process is managed by the operating system and has its own address space, which is isolated from other processes running on the system. A process can contain one or more threads.

## what is a processes
A thread, on the other hand, is a lightweight unit of execution within a process. A thread shares the same memory space as the process and can access the same data structures and resources, but each thread has its own stack and a separate execution context. Multiple threads can run concurrently within a process, allowing for parallel processing of tasks.

Threads are typically used to perform multiple tasks simultaneously within a single process, such as handling user input, performing background processing, or managing network connections. By contrast, processes are used to isolate different instances of programs from one another and to provide security and stability for the system as a whole.

## What dose libuv do ? 

Libuv provides several functionalities for building high-performance network applications using Node.js, including:

Event-driven, non-blocking I/O: Libuv provides an event loop that allows developers to perform I/O operations in a non-blocking way. This allows multiple I/O operations to be performed simultaneously without blocking the main thread, resulting in better performance and scalability.

Networking: Libuv provides a networking API that allows developers to create and manage TCP and UDP sockets, as well as handle low-level network events such as connection and disconnection.

File system access: Libuv provides an API for performing file system operations such as reading and writing files, watching for changes to files and directories, and creating and deleting files and directories.

Concurrency: Libuv provides several concurrency primitives, including threads, mutexes, and semaphores, which can be used to synchronize access to shared resources in a multi-threaded environment.

Timers: Libuv provides a timer API that allows developers to schedule callbacks to be executed at a specific time in the future, or to repeat at a fixed interval.

Child processes: Libuv provides an API for spawning child processes and communicating with them using pipes and other IPC mechanisms.

Platform abstractions: Libuv provides a consistent API across multiple platforms, abstracting away platform-specific details such as differences in file system behavior or network interfaces.

Overall, Libuv is a critical component of the Node.js runtime, providing the low-level functionality necessary to build scalable, high-performance network applications.
