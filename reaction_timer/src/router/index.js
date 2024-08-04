import { createRouter, createWebHistory } from 'vue-router';
import SectionOne from '@/views/router-comp/SectionOne.vue';
import SectionTwo from '@/views/router-comp/SectionTwo.vue';
import Jobs from '@/views/jobs/Jobs.vue';
import JobDetails from '@/views/jobs/JobDetails.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/section one',
      name: 'Section-one',
      component: SectionOne
    },
    {
      path: '/section two',
      name: 'Section-two',
      component: SectionTwo
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/Jobs/:id',
      name: 'JobDetails',
      component: JobDetails,
      props: true
    },
    {
      path: '/all-jobs',
      redirect: '/jobs',
    },
    // {
    //   path: '/:catchAll(.*)',
    //   name: 'not found',
    //   component: NotFound
    // }
  ],
    scrollBehavior(){
       return{ top: 0 }
    },
})

export default router
