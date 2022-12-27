export const LanguageObject = [
  {
    label: 'Lightning',
    border: '1px solid rgba(184, 37, 95, 0.1)',
    background: 'rgba(184, 37, 95, 0.1)',
    color: '#B8255F'
  },
  {
    label: 'Javascript',
    border: '1px solid rgba(219, 64, 53, 0.1)',
    background: 'rgba(219, 64, 53, 0.1)',
    color: '#DB4035'
  },
  {
    label: 'Typescript',
    border: '1px solid rgba(255, 153, 51, 0.1)',
    background: ' rgba(255, 153, 51, 0.1)',
    color: '#FF9933'
  },
  {
    label: 'Node',
    border: '1px solid rgba(255, 191, 59, 0.1)',
    background: 'rgba(255, 191, 59, 0.1)',
    color: '#FFBF3B'
  },
  {
    label: 'Golang',
    border: '1px solid rgba(175, 184, 59, 0.1)',
    background: 'rgba(175, 184, 59, 0.1)',
    color: '#AFB83B'
  },
  {
    label: 'Swift',
    border: '1px solid rgba(126, 204, 73, 0.1)',
    background: 'rgba(126, 204, 73, 0.1)',
    color: '#7ECC49'
  },
  {
    label: 'Kotlin',
    border: '1px solid rgba(41, 148, 56, 0.1)',
    background: 'rgba(41, 148, 56, 0.1)',
    color: '#299438'
  },
  {
    label: 'MySQL',
    border: '1px solid rgba(106, 204, 188, 0.1)',
    background: 'rgba(106, 204, 188, 0.1)',
    color: '#6ACCBC'
  },
  {
    label: 'PHP',
    border: '1px solid rgba(21, 143, 173, 0.1)',
    background: 'rgba(21, 143, 173, 0.1)',
    color: '#158FAD'
  },
  {
    label: 'R',
    border: '1px solid rgba(64, 115, 255, 0.1)',
    background: 'rgba(64, 115, 255, 0.1)',
    color: '#4073FF'
  },
  {
    label: 'C#',
    border: '1px solid rgba(136, 77, 255, 0.1)',
    background: 'rgba(136, 77, 255, 0.1)',
    color: '#884DFF'
  },
  {
    label: 'C++',
    border: '1px solid rgba(175, 56, 235, 0.1)',
    background: 'rgba(175, 56, 235, 0.1)',
    color: '#AF38EB'
  },
  {
    label: 'Java',
    border: '1px solid rgba(235, 150, 235, 0.1)',
    background: 'rgba(235, 150, 235, 0.1)',
    color: '#EB96EB'
  },
  {
    label: 'Rust',
    border: '1px solid rgba(224, 81, 148, 0.1)',
    background: 'rgba(224, 81, 148, 0.1)',
    color: '#E05194'
  },
  {
    label: 'No-code',
    border: '1px solid rgba(255, 141, 133, 0.1)',
    background: 'rgba(255, 141, 133, 0.1)',
    color: '#FF8D85'
  }
];

export const coding_languages = [
  'Lightning',
  'Javascript',
  'Typescript',
  'Node',
  'Golang',
  'Swift',
  'Kotlin',
  'MySQL',
  'PHP',
  'R',
  'C#',
  'C++',
  'Java',
  'Rust'
];

export const status = ['Opened', 'Assigned', 'Paid'];

export const GetValue = (arr: any) => {
  return arr.map((val) => {
    return {
      id: val,
      label: val,
      value: val
    };
  });
};

export const awards = [
  {
    id: 'Admin',
    label: 'Admin',
    label_icon: '/static/awards/Admin_award.svg'
  },
  {
    id: 'Moderator',
    label: 'Moderator',
    label_icon: '/static/awards/Moderator_award.svg'
  },
  {
    id: 'Developer',
    label: 'Developer',
    label_icon: '/static/awards/Developer_award.svg'
  },
  {
    id: 'First 1000 members',
    label: 'First 1000 members',
    label_icon: '/static/awards/1st_1000_member_award.svg'
  },
  {
    id: 'Contributing 1M sats ',
    label: 'Contributing 1M sats ',
    label_icon: '/static/awards/1M_sat_award.svg'
  },
  {
    id: 'New Member',
    label: 'New Member',
    label_icon: '/static/awards/new_member_award.svg'
  },
  {
    id: 'Early/Founding Member',
    label: 'Early/Founding Member',
    label_icon: '/static/awards/early_founding_member_award.svg'
  },
  {
    id: 'Conversation Starter',
    label: 'Conversation Starter',
    label_icon: '/static/awards/conversation_award.svg'
  },
  {
    id: 'VIP member',
    label: 'VIP member',
    label_icon: '/static/awards/vip_member_award.svg'
  },
  {
    id: 'Group Expert',
    label: 'Group Expert',
    label_icon: '/static/awards/group_expert_award.svg'
  }
];

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly border: string;
  readonly background: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  {
    label: 'Lightning',
    value: 'Lightning',
    border: '1px solid rgba(184, 37, 95, 0.1)',
    background: 'rgba(184, 37, 95, 0.1)',
    color: '#B8255F'
  },
  {
    label: 'Javascript',
    value: 'Javascript',
    border: '1px solid rgba(219, 64, 53, 0.1)',
    background: 'rgba(219, 64, 53, 0.1)',
    color: '#DB4035'
  },
  {
    label: 'Typescript',
    value: 'Typescript',
    border: '1px solid rgba(255, 153, 51, 0.1)',
    background: ' rgba(255, 153, 51, 0.1)',
    color: '#FF9933'
  },
  {
    label: 'Node',
    value: 'Node',
    border: '1px solid rgba(255, 191, 59, 0.1)',
    background: 'rgba(255, 191, 59, 0.1)',
    color: '#FFBF3B'
  },
  {
    label: 'Golang',
    value: 'Golang',
    border: '1px solid rgba(175, 184, 59, 0.1)',
    background: 'rgba(175, 184, 59, 0.1)',
    color: '#AFB83B'
  },
  {
    label: 'Swift',
    value: 'Swift',
    border: '1px solid rgba(126, 204, 73, 0.1)',
    background: 'rgba(126, 204, 73, 0.1)',
    color: '#7ECC49'
  },
  {
    label: 'Kotlin',
    value: 'Kotlin',
    border: '1px solid rgba(41, 148, 56, 0.1)',
    background: 'rgba(41, 148, 56, 0.1)',
    color: '#299438'
  },
  {
    label: 'MySQL',
    value: 'MySQL',
    border: '1px solid rgba(106, 204, 188, 0.1)',
    background: 'rgba(106, 204, 188, 0.1)',
    color: '#6ACCBC'
  },
  {
    label: 'PHP',
    value: 'PHP',
    border: '1px solid rgba(21, 143, 173, 0.1)',
    background: 'rgba(21, 143, 173, 0.1)',
    color: '#158FAD'
  },
  {
    label: 'R',
    value: 'R',
    border: '1px solid rgba(64, 115, 255, 0.1)',
    background: 'rgba(64, 115, 255, 0.1)',
    color: '#4073FF'
  },
  {
    label: 'C#',
    value: 'C#',
    border: '1px solid rgba(136, 77, 255, 0.1)',
    background: 'rgba(136, 77, 255, 0.1)',
    color: '#884DFF'
  },
  {
    label: 'C++',
    value: 'C++',
    border: '1px solid rgba(175, 56, 235, 0.1)',
    background: 'rgba(175, 56, 235, 0.1)',
    color: '#AF38EB'
  },
  {
    label: 'Java',
    value: 'Java',
    border: '1px solid rgba(235, 150, 235, 0.1)',
    background: 'rgba(235, 150, 235, 0.1)',
    color: '#EB96EB'
  },
  {
    label: 'Rust',
    value: 'Rust',
    border: '1px solid rgba(224, 81, 148, 0.1)',
    background: 'rgba(224, 81, 148, 0.1)',
    color: '#E05194'
  },
  {
    label: 'No-code',
    value: 'No-code',
    border: '1px solid rgba(255, 141, 133, 0.1)',
    background: 'rgba(255, 141, 133, 0.1)',
    color: '#FF8D85'
  }
];

export const BountyDetailsCreationData = {
  step_1: {
    step: 1,
    schemaName: '',
    heading: 'Choose Bounty type',
    sub_heading: '',
    schema: [''],
    schema2: [''],
    required: [''],
    outerContainerStyle: {
      minWidth: '712px',
      maxWidth: '712px',
      height: '560px'
    },
    headingStyle: {},
    extraText: ''
  },
  step_2: {
    step: 2,
    schemaName: 'Freelance Job Request',
    heading: 'Basic info',
    sub_heading: ' ',
    schema: ['one_sentence_summary', 'ticketUrl'],
    schema2: ['wanted_type', 'codingLanguage'],
    required: ['one_sentence_summary'],
    outerContainerStyle: {
      minWidth: '712px',
      maxWidth: '712px',
      height: '416px'
    },
    headingStyle: {
      marginBottom: '40px'
    },
    extraText: '* Required fields'
  },
  step_3: {
    step: 3,
    schemaName: 'Freelance Job Request',
    heading: 'Description',
    sub_heading: ' ',
    schema: ['github_description', 'description'],
    schema2: [' ', 'loomEmbedUrl'],
    required: [''],
    outerContainerStyle: {
      minWidth: '712px',
      maxWidth: '712px',
      height: '488px'
    },
    headingStyle: {
      marginBottom: '34px'
    },
    extraText: '* Required fields'
  },
  step_4: {
    step: 4,
    schemaName: 'Freelance Job Request',
    heading: 'Price and Estimate',
    sub_heading: ' ',
    schema: ['price', 'estimate_session_length', 'estimated_completion_date'],
    schema2: ['tribe', 'deliverables', 'show'],
    required: ['price'],
    outerContainerStyle: {
      minWidth: '712px',
      maxWidth: '712px',
      height: '528px'
    },
    headingStyle: {
      marginBottom: '50px'
    },
    extraText: '* Required fields'
  },
  step_5: {
    step: 5,
    schemaName: '',
    heading: 'Assign Developer',
    sub_heading: '',
    schema: ['assignee'],
    schema2: [''],
    required: [''],
    outerContainerStyle: {
      minWidth: '388px',
      maxWidth: '388px',
      height: '100%'
    },
    headingStyle: {},
    extraText: ''
  }
};
