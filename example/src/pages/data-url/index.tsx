import NoData from './NoData.svg';
import { css } from '@linaria/core';
import React from 'react';

export default function DataURL() {
  return (
    <section
      className={css`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 18px;

        div,
        img {
          margin-bottom: 20px;
        }
      `}
    >
      <div
        className={css`
          width: 200px;
          height: 34px;
          background: url('data:image/gif;base64,R0lGODlhyAAiALMAAFONvX2pzbPN4p6/2tTi7mibxYiw0d/q86nG3r7U5l2UwZO31unx98nb6nOiyf///yH5BAUUAA8ALAAAAADIACIAAAT/8MlJq7046827/2AojmRpnmiqriwGvG/Qjklg28es73wHxz0P4gcgBI9IHVGWzAx/xqZ0KlpSLU9Y9MrtVqzeBwFBJjPCaC44zW4HD4TzZI0h2OUjON7EsMd1fXcrfnsfgYUSeoYLPwoLZ3QTDAgORAoGWxQHNzYSBAY/BQ0XNZw5mgMBRACOpxSpnLE3qKqWC64hk5WNmBebnA8MjC8KFAygMAUCErA2CZoKq6wHkQ8C0dIxhQRED8OrC1hEmQ+12QADFebnABTr0ukh1+wB20QMu0ASCdn16wgTDmCTNlDfhG/sFODi9iMLvAoOi6hj92LZhHfZ3FEEYNEDwnMK/ykwhDEATAN2C/5d3PiDiYSIrALkg6EAz0hiFDNFJKeqgIEyM1nhwShNo0+glhBhgKlA5qqaE25KY1KAYkGAYlYVSEAgQdU1DFbFe3DgKwysWcHZ+QjAAIWdFQaMgkjk2b4ySLtNkCvuh90NYYmMLUsErVRiC8o8OLmkAYF5hZkRKYCHgVmDAiJJLeZpVUdrq/DA7XB5rAV+gkn/MJ0hc8sKm6OuclDoo8tgBQFgffd335p3cykEjSK1gIXLEl+Oq9OgTIKZtymg/hHuAoHmZJ6/5gDcwvDOyysEDS7B9VkJoSsEhuEyN6KSPyxKrf4qsnIoFQ4syL0qum8i9AW0H/9F/l3gngXwwSAfEQ5csIoFUmH1oAVrTEhXQ+Cdd6GGD4z230b+TQdDgB8S6INeG76AlVSsoYeibBg+cOAX2z1g4Vv2sYggER15uFliZFwWnUAAQmhLGUKe+MMFEa1oH40/FMKYht1RMKVB7+AiwTvEMehdeB2CicwLlAlXI1m5kSjBmACUOQF0HWRpAZcZqngBbxWwqZtkZz4QlEsJvkDiejDIcRh5h4kG5pPBrEHkDw06GKMEhAJwGxx+uBIoAIOmlxaH9TWCh4h2fgqDAWcc019AqwTHwDtu1UmMRQnkdpuHRU6gZ3uWOOaHILmuScc6LlFDhKuwwgiqsjQNgAD/UWgFZaKuq/w0AHIAuHIYReR5+A4C12HkEksSfRvuqiuxR4GebSFw7SraMqoRuXvK2t+Z+JDb22bsxDqBh+YRVCO5RgT81JnEGiNtNvvKKwl/IzJKql8ORadqQuSZis7CANCWYnIScOyAiJHayFIUIpM8r0GUstsrbA4HhC2nJi9LwDuihKkuhEQpgAAiEQpjyc99aWHMppz2gSLBlCL9iFQrW2pdz0TDPCkGCRgQjU9GVPpZQAkgIICWHfQhABkNkM1svQxg9wcJfWSn1AlxI5DA3COYjbbaLJBKzhQRuiF4Cn8nMiMXgQ+uOAkBFDDA2wxABkPJiMe8+OUaECVNLMZUJI755xtoHmwXnoNuugUQp4bGLzf0dvrriy2wsAMD4A377YJjSgDfD0QAADs=')
            no-repeat;
        `}
      ></div>

      <img
        src="data:image/gif;base64,R0lGODlhUAAPAKIAAAsLav///88PD9WqsYmApmZmZtZfYmdakyH5BAQUAP8ALAAAAABQAA8AAAPbWLrc/jDKSVe4OOvNu/9gqARDSRBHegyGMahqO4R0bQcjIQ8E4BMCQc930JluyGRmdAAcdiigMLVrApTYWy5FKM1IQe+Mp+L4rphz+qIOBAUYeCY4p2tGrJZeH9y79mZsawFoaIRxF3JyiYxuHiMGb5KTkpFvZj4ZbYeCiXaOiKBwnxh4fnt9e3ktgZyHhrChinONs3cFAShFF2JhvCZlG5uchYNun5eedRxMAF15XEFRXgZWWdciuM8GCmdSQ84lLQfY5R14wDB5Lyon4ubwS7jx9NcV9/j5+g4JADs="
        alt=""
      />

      <img src={NoData} alt="" />
    </section>
  );
}
