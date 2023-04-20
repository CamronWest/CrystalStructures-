"""empty message

Revision ID: 8b9d715fe83f
Revises: fa26f58e273b
Create Date: 2023-04-20 02:13:15.463757

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b9d715fe83f'
down_revision = 'fa26f58e273b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('solution', schema=None) as batch_op:
        batch_op.drop_constraint('fk_solution_user_id_user', type_='foreignkey')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('solution', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.INTEGER(), nullable=True))
        batch_op.create_foreign_key('fk_solution_user_id_user', 'user', ['user_id'], ['id'])

    # ### end Alembic commands ###
