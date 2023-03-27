import { Job, Company } from './db.js';


// export const resolvers = {
//     Query: {
//         greeting: () => 'Hello World!',
//     }
// }

export const resolvers = {
    Query: {
        // jobs: async () => [
        //     {
        //         id: '1',
        //         title: 'Title1',
        //         description: 'Des1'
        //     },
        //     {
        //         id: '2',
        //         title: 'Title2',
        //         description: 'Des2'
        //     }
        // ]
        company: (_root, { id }) => Company.findById(id),
        job: (_root, { id }) => Job.findById(id),
        jobs: () => Job.findAll()
    },

    Job: {
        company: (job) => {
            // console.log(' Resolving Job: ', job);
            return Company.findById(job.companyId);
            // return {
            //     id: 'fake',
            //     name: 'fake Inc'
            // };
        }
    },

    Company: {
        jobs: (company) => {
            return Job.findAll((job) => job.companyId === company.id);
        }
    }
};