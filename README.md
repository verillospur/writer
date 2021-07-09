# writer
Management for Writing Services Provider

# repo
https://github.com/verillospur/writer.git

# abstract
Need to keep track /records of 
  > - work produced (unsolicited/job)
  > - jobs undertaken (underway/completed)
  > - payments (issued/pending/paid)
  > - clients

Clients should be represented as contact information.

Payments should be represented as payment information 
and references to associated job/work/client.

Work and Jobs (currently) should be represented as 
"lumps" - i.e. freeform data, no predefined models or 
fields. Some meta data should be available, e.g. 
duration, start/end dates, etc.

Externally created files should be either referenced 
or stored under each job/work. 

A job/work can be just a collection of files.  
Alternatively a more structured organisational
approach can be used:

> - job/work
>     - section 1
>         - files
>         - sub-section 1.1
>             - files
>     - section 2
>         - files
>         - sub-section 2.1
>             - files
>     etc

Each node in the tree can be assigned unlimited meta data 
fields (name/value pairs).

At this time, a single predefined data structure should 
exist for each job/work that links jobs to work and 
vice-versa, e.g. each piece of work produced for a 
particular job. Each work would reference the 'parent'
job. 
