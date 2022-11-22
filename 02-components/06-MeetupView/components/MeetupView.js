import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from "../../02-MeetupDescription/components/MeetupDescription";
import MeetupAgenda from "../../05-MeetupAgenda/components/MeetupAgenda";
import MeetupInfo from "../../04-MeetupInfo/components/MeetupInfo";
import MeetupCover from "../../03-MeetupCover/components/MeetupCover";

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
    MeetupCover,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image" />
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>{{ meetup.title }}</h3>
            <MeetupDescription :description="meetup.description"/>

            <h3>Программа</h3>
            <MeetupAgenda :agenda="meetup.agenda" v-if="meetup.agenda"/>
            <UiAlert v-else>Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
          </div>
        </div>
      </ui-container>
    </div>`,
});
