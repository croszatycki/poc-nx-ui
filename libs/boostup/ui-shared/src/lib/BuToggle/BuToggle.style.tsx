import styled from '@emotion/styled';

export const Container = styled.label`

    --bu-interface-01: #fafafb;
    --bu-interface-02: #f7f7f8;
    --bu-interface-03: #e6ebec;
    --bu-interface-04: #dee2e4;
    --bu-interface-05: #c2ccd0;
    --bu-interface-06: #00c156;
    --bu-interface-07: #cccccc;
    --bu-interface-08: #dbdce1;
    --bu-interface-09: #bababa;
    --bu-interface-10: #f6f8f8;
    --bu-interface-11: #fafafa;
    --bu-interface-dark: #315c79;
    --bu-interface-slightly-gray: #e7ebec;
    --bu-interface-slightly-dark-gray: #c6cad2;
    --bu-interface-white: #ffffff;
    --bu-primary-accent: #f5fbfe;
    --bu-primary: #2095ca;
    --bu-primary-light: #edfafd;

    --bu-positive: #29bc62;
    --bu-positive-accent: #eafbf0;
    --bu-negative: #ff4143;
    --bu-negative-accent: #fceae9;
    --bu-warning: #e69c10;
    --bu-warning-accent: #fdf6e7;

    --bu-risk-not-scored: #a7a7a7;

    --bu-text-accent: #737376;
    --bu-text-default: #222222;

    --bu-dropdown-option-active: #f2f9fd;

    --bu-control-height-small: 30px;
    --bu-control-height-regular: 32px;
    --bu-control-height-big: 34px;

    --bu-control-border-radius: 4px;

    --bu-font-size-small: 0.9em;
    --bu-font-size-regular: 1em;
    --bu-font-size-big: 1.1em;

    --bu-color-meeting: #e8930c;
    --bu-color-buying_team_email: #30b0d1;
    --bu-color-selling_team_email: #08d1b0;
    --bu-color-next_steps: #9f60ed;
    --bu-color-crm_activity: #ff588b;

    --bu-color-chart-best_case: #6ea2c4;
    --bu-color-chart-booked: #41ec8e;
    --bu-color-chart-boostup_projection: #0762ec;
    --bu-color-chart-commit: #96d6e8;
    --bu-color-chart-company_forecast: #a669ce;
    --bu-color-chart-expected_booked: #92ad42;
    --bu-color-chart-lost: #fd7f77;
    --bu-color-chart-pipeline: var(--bu-interface-05);
    --bu-color-chart-pipeline_coverage: #ffc838;
    --bu-color-chart-target: #e69c10;
    --bu-color-chart-omitted: #cdad71;
    --bu-color-chart-closed: #7d84aa;
    --bu-color-chart-in_play: #e19ec6;
    --bu-color-chart-pipeline_coverage_target: #6236ff;

    --bu-clickable-cell: var(--bu-primary);
    --bu-clickable-cell__hover: var(--bu-primary);

    --bu-control-disable-opacity: 0.5;

    --bu-color-chart-additional_monthly_1: #9c3071;
    --bu-color-chart-additional_monthly_2: #b03680;
    --bu-color-chart-additional_monthly_3: #c33c8e;
    --bu-color-chart-additional_monthly_4: #c95099;
    --bu-color-chart-additional_monthly_5: #cf63a4;
    --bu-color-chart-additional_monthly_6: #d577af;
    --bu-color-chart-additional_monthly_7: #db8abb;
    --bu-color-chart-additional_monthly_8: #e19ec6;
    --bu-color-chart-additional_monthly_9: #eb85a3;
    --bu-color-chart-additional_monthly_10: #61e37d;

    --bu-color-chart-additional_weekly_1: #ee8611;
    --bu-color-chart-additional_weekly_2: #f09229;
    --bu-color-chart-additional_weekly_3: #f29e40;
    --bu-color-chart-additional_weekly_4: #f3aa58;
    --bu-color-chart-additional_weekly_5: #f5b670;
    --bu-color-chart-additional_weekly_6: #f7c288;
    --bu-color-chart-additional_weekly_7: #f8cea0;
    --bu-color-chart-additional_weekly_8: #fadbb8;
    --bu-color-chart-additional_weekly_9: #cdad71;

    --bu-color-chart-additional_quarterly_1: #8d3fc0;
    --bu-color-chart-additional_quarterly_2: #9852c6;
    --bu-color-chart-additional_quarterly_3: #a465cd;
    --bu-color-chart-additional_quarterly_4: #af78d3;
    --bu-color-chart-additional_quarterly_5: #bb8cd9;
    --bu-color-chart-additional_quarterly_6: #c69fe0;
    --bu-color-chart-additional_quarterly_7: #d1b2e6;
    --bu-color-chart-additional_quarterly_8: #d1b2e6;
    --bu-color-chart-additional_quarterly_9: #ac5fc1;
    --bu-color-chart-additional_quarterly_10: #c28ed7;

    --bu-color-chart-additional_projections_1: #0767f8;
    --bu-color-chart-additional_projections_2: #2076f9;
    --bu-color-chart-additional_projections_3: #3985f9;
    --bu-color-chart-additional_projections_4: #5195fa;
    --bu-color-chart-additional_projections_5: #6aa4fb;
    --bu-color-chart-additional_projections_6: #6aa4fb;
    --bu-color-chart-additional_projections_7: #9cc2fc;
    --bu-color-chart-additional_projections_8: #b5d1fd;
    --bu-color-chart-additional_projections_9: #64cae6;
    --bu-color-chart-additional_projections_10: #7d84aa;

    --bu-color-chart-additional_fields_1: #ac5fc1;
    --bu-color-chart-additional_fields_2: #64cae6;
    --bu-color-chart-additional_fields_3: #eb85a3;
    --bu-color-chart-additional_fields_4: #61e37d;
    --bu-color-chart-additional_fields_5: #7d84aa;
    --bu-color-chart-additional_fields_6: #c28ed7;
    --bu-color-chart-additional_fields_7: #cdad71;



  --bu-toggle-width: 34px;
  --bu-toggle-height: 14px;
  --bu-toggle-dot_size: 20px;

  --bu-toggle-dot_offset: calc(
    (var(--bu-toggle-dot_size) - var(--bu-toggle-height)) / 2
  );

  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 0;
  height: 30px;

  &.disabled {
    opacity: var(--bu-control-disable-opacity);
    cursor: default;
  }
`;

export const Bar = styled.span`
  background-color: var(--bu-interface-05);
  transition: 0.4s;
  border-radius: var(--bu-toggle-height);
  width: var(--bu-toggle-width);
  height: var(--bu-toggle-height);
  display: inline-block;
  margin: var(--bu-toggle-dot_offset);
  margin-right: calc(var(--bu-toggle-dot_offset) + 5px);
  text-align: left;

  &::before {
    content: '';
    height: var(--bu-toggle-dot_size);
    width: var(--bu-toggle-dot_size);
    background-color: var(--bu-interface-02);
    transition: 0.4s;
    border-radius: var(--bu-toggle-dot_size);
    border: 1px solid var(--bu-interface-05);
    transform: translate(
      calc(-1 * var(--bu-toggle-dot_offset)),
      calc(-1 * var(--bu-toggle-dot_offset))
    );
    display: inline-block;
  }
`;
export const Dot = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked {
    + span {
      background-color: var(--bu-primary-accent);

      &:before {
        transform: translate(
          calc(
            var(--bu-toggle-width) - var(--bu-toggle-dot_size) +
              var(--bu-toggle-dot_offset)
          ),
          calc(-1 * var(--bu-toggle-dot_offset))
        );
        background-color: var(--bu-primary);
        border-color: transparent;
      }
    }
  }
`;

Dot.defaultProps = {
  type: 'checkbox',
};
