"""empty message

Revision ID: 210fa651576d
Revises: d1ea4310c346
Create Date: 2023-04-19 08:47:24.150734

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '210fa651576d'
down_revision = 'd1ea4310c346'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('solution', schema=None) as batch_op:
        batch_op.add_column(sa.Column('code', sa.String(), nullable=True))
        batch_op.drop_column('contents')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('solution', schema=None) as batch_op:
        batch_op.add_column(sa.Column('contents', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('code')

    # ### end Alembic commands ###
